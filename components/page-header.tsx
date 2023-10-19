"use client"

interface PageHeaderProps {
  title: string
}

const PageHeader = ({
  title
} : PageHeaderProps )  => {
  return (
    <h1 className="text-3xl font-bold">
      {title}
    </h1>
  )
}

export default PageHeader