"use client"

interface PageHeaderProps {
  title: string
}

const PageHeader = ({
  title
} : PageHeaderProps )  => {
  return (
    <h1 className="z-10 text-3xl font-bold px-4 py-5 backdrop-blur bg-black/10 sticky top-0">
      {title}
    </h1>
  )
}

export default PageHeader