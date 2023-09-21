import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest';
import newsApi from './test/helpers/newsApi';

import App from './App';
describe('App', () => {

  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = vi.fn()
      .mockResolvedValue({
        json: async () => (newsApi),
      })
  })

  it('Verifica se título MAIS RECENTES aparece logo que acessa o site', () => {
    render(<App />);
  
    expect(screen.getByRole('heading', {
      name: /mais recentes/i
    })).toBeInTheDocument();
  });

  it('Verifica se título RELEASE aparece logo que acessa o site', async () => {
    render(<App />);

    const releaseFilter = screen.getByRole('button', {  name: /release/i})

    await userEvent.click(releaseFilter); 
    
    const releaseTitle = screen.getByRole('heading',  { level: 2,  name: /release/i})
    expect(releaseTitle).toBeInTheDocument();
  })

  it('Verifica se título NOTÍCIA aparece logo que acessa o site', async () => {
    render(<App />);

    const noticiaFilter = screen.getByRole('button', {  name: /notícia/i})

    await userEvent.click(noticiaFilter); 
    
    const noticiaTitle = screen.getByRole('heading', {  name: /notícia/i})
    expect(noticiaTitle).toBeInTheDocument();
  })

  it('Verifica se título FAVORITAS aparece logo que acessa o site', async () => {
    render(<App />);

    const favoritasFilter = screen.getByRole('button', {  name: /favoritas/i})

    await userEvent.click(favoritasFilter); 
    
    const favoritasTitle = screen.getByRole('heading', {  name: /favoritas/i})
    expect(favoritasTitle).toBeInTheDocument();
  })

  it('Se o Footer aparece no site', () => {
    render(<App />);

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument();
  })

  it('Se o botão MAIS NOTÍCIAS aparece no site', () => {
    render(<App />);

    const moreNews = screen.getByText(/mais notícias/i)
    expect(moreNews).toBeInTheDocument();
  })

  it('Quando renderiza a página, aparece 5 notícias', async () => {
    render(<App />);

    const news = await screen.findAllByRole('article')
    expect(news.length).toBe(5);
  })

  it('Quando clico no filtro Release, aparece 3 notícias', async () => {
    render(<App />);

    const releaseFilter = screen.getByRole('button', {  name: /release/i})

    await userEvent.click(releaseFilter)

    const news = await screen.findAllByRole('article')
    expect(news.length).toBe(3);
  })

  it('Quando clico no filtro Notícia, aparece 2 notícias', async () => {
    render(<App />);

    const notíciaFilter = screen.getByRole('button', {  name: /notícia/i})

    await userEvent.click(notíciaFilter)

    const news = await screen.findAllByRole('article')
    expect(news.length).toBe(2);
  })

  it('Quando eu clico no Coração, a notícia vai para a página Favoritas, e quando clica novamente, a notícia sai', async () => {
    render(<App />);
    const mockStorage = vi.spyOn(Storage.prototype, 'setItem');
    global.Storage.prototype.getItem = vi.fn(() => JSON.stringify(newsApi.items[0]));

    const heart = await screen.findAllByRole('button', {  name: /svg favorite/i})

    await userEvent.click(heart[0])
    expect(mockStorage).toHaveBeenCalledTimes(1);

    const favoritasFilter = screen.getByRole('button', {  name: /favoritas/i})

    await userEvent.click(favoritasFilter)

    const news = await screen.findAllByRole('article')
    expect(news.length).toBe(1);

    const newsFavorites = screen.getByRole('img', {  name: /svg favorite/i})
    await userEvent.click(newsFavorites)

    screen.debug()
    expect(mockStorage).toHaveBeenCalledTimes(2);
  })
})