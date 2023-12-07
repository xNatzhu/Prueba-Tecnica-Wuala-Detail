export default function ImageGallery ({ image }) {
    return(
        <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
        <div class="sticky top-0 overflow-hidden ">
          <div class="relative mb-6 lg:mb-10 lg:h-96">
            <a
              class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                ></path>
              </svg>
            </a>
            <img
              class="object-contain w-full lg:h-full"
              src="https://cdn.indomablestore.com/products/2665.webp"
              alt=""
            />
            <a
              class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="flex-wrap hidden -mx-2 md:flex">
            <div class="w-1/2 p-2 sm:w-1/4">
              <a
                class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                href="#"
              >
                <img
                  class="object-contain w-full lg:h-28"
                  src="https://www.greenheart.at/media/catalog/product/cache/3/image/363x/040ec09b1e35df139433887a97daa66f/2/2/220214-01_004.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="w-1/2 p-2 sm:w-1/4">
              <a
                class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                href="#"
              >
                <img
                  class="object-contain w-full lg:h-28"
                  src="https://cdn.indomablestore.com/products/2665.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}