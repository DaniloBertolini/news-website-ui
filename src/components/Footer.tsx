import ghostIcon from '/ghost.svg'

function Footer() {
  return (
    <footer className="bg-midnightGreen p-3">
      <span className="text-verdigris flex items-center justify-center">
      <img className="pr-1" src={ ghostIcon } alt="svg ghost" />
        Feito por Danilo
        <img className="pl-1" src={ ghostIcon } alt="svg ghost" />
      </span>
    </footer>
  )
}

export default Footer