export default function Breadcrumb() {
  return (
    <nav className="flex mb-[30px]" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-[14px] font-medium text-gray-500 hover:text-[#dbbb49] dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-2 h-2 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Pagina Principal
          </a>
        </li>
        <li>
          <div className="items-center  hidden md:flex">
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-[14px] font-medium text-gray-500 hover:text-[#dbbb49] md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Perros
            </a>
          </div>
        </li>
        <li>
          <div className="items-center hidden md:flex">
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-[14px] font-medium text-gray-500 hover:text-[#dbbb49] md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Alimentacion natural & Suplementos
            </a>
          </div>
        </li>
        
        <li>
          <div className="items-center hidden md:flex">
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-[14px] font-medium text-gray-500 hover:text-[#dbbb49] md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Suplementos
            </a>
          </div>
        </li>

        <li aria-current="page">
          <div className="items-center hidden md:flex">
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-[14px] font-medium text-gray-700 md:ms-2 dark:text-gray-400">
              Alimentacion natural & Suplementos
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
