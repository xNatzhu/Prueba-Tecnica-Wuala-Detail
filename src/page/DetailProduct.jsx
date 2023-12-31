import Breadcrumb from "../components/Detail/Breadcrumb";
import ImageGallery from "../components/Detail/ImageGallery";

export default function DetailProduct() {
  return (
    <>
      <section className=" pt-5 font-poppins">
        <div className="max-w-6xl px-4 mx-auto">
          <Breadcrumb />

          <div className="flex flex-wrap mb-7 -mx-4">
            <ImageGallery />
            <div className="w-full px-4 md:w-1/2 relative ">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="px-2.5 py-0.5 text-xs  bg-gray-700 rounded-xl text-gray-200">
                    Perros
                  </span>
                  <h2 className="max-w-xl mt-6 mb-3 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl">
                    SmoothieDOG - Inmunio
                  </h2>
                  <p className="py-1 mb-2 mr-1  w-[60px]   text-gray-500">
                        250 ML
                  </p>
                  <p className="inline-block text-2xl font-semibold text-gray-500 ">
                    <span> €3,94</span>
                    <span className="ml-3 text-base font-normal text-gray-500 line-through">
                      5,00
                    </span>
                    <span className="ml-3 font-normal text-[13px] text-gray-500">
                      Impuestos Incluidos
                    </span>
                  </p>
                </div>
                <div className="py-6 mb-6 border-t border-b border-gray-700">
                  <span className="text-base text-gray-700 font-bold">
                    El snock para perros especiales
                  </span>
                  <p className="mt-2 text-sm text-gray-500">
                    Todos los perros necesitan un refuerzo inmunitario en
                    determinadas etapas de su vida. Para reforzar el sistema
                    inmunitario, la carne de vacuno, la remolacha, la zanahoria
                    y la chirivía son ideales. Los superalimentos copos de coco,
                    cúncuma y escaramujo tienen un efecto antibacteriano, El
                    contenido en vitamina € de la rosa mosqueta multiplica por
                    dos el de los cítricos. La hierba de San Juan alegra el
                    ánimo en los dias oscuros. Bien preparado en días húmedos o
                    antes y después de esfuerzos como enformodados o
                    intervenciones quirúrgicas —o simplemente porque Immunio
                    sabe tan delicioso.
                  </p>
                </div>
                <button className="flex z-40 absolute  top-0 right-5  md:right-1  items-center text-center justify-center w-11 h-10 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                  </svg>
                </button>

                <div className="mb-6 "></div>
                <div className="flex flex-wrap items-center mb-6">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-28">
                      <div className="relative flex flex-row w-full bg-transparent items-center justify-center rounded-lg ">
                        <button className="w-20 py-2  text-gray-700 bg-gray-200 border-r rounded-l outline-none cursor-pointer">
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>

                        <input
                          type="text"
                          className="flex items-center py-3 w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none"
                          placeholder="1"
                        />

                        <button className="w-20 py-2 text-gray-700 bg-gray-200 border-l rounded-r outline-none cursor-pointer">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="w-full mt-6  px-4 py-3 md:mt-0 text-center bg-[#dbbb49]   text-gray-100 lg:w-1/2 rounded-xl"
                  >
                    Añadir al carrito
                  </a>
                </div>
                <div className="flex gap-4 mb-6">
                  <a
                    href="#"
                    className="w-full px-4 py-3 text-center text-gray-100 border border-transparent border-gray-700   bg-gray-700  rounded-xl"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700 mt-[30px] md:mt-[70px] w-[100%] mx-4">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-400">
                <li className="me-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center p-4 text-[#dbbb49] border-b-2 border-[#dbbb49] rounded-t-lg active dark:text-[#dbbb49] dark:border-[#dbbb49] group"
                    aria-current="page"
                  >
                    <svg
                      className="w-4 h-4 me-2 text-[#dbbb49]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    Descripción
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-gray-500 hover:text-gray-600 hover:border-gray-700 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 me-2  text-gray-600 group-hover:text-gray-500 bi bi-award-fill"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                    </svg>
                    Reseña(0)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mx-4">
              <p className="mt-5 text-sm text-gray-500">
                SmoothieDog es un snack líquido y carnoso que complementa la
                alimentación diaria de perros de todas las edades y tamaños:
              </p>
              <p className="mt-5 text-sm text-gray-500">
                Alimento complementario pare perros que se administra a voluntad
                como parte de una dieta variada y equilibrada. El frasco se
                puede porcionar, ya que es rescllable. Une vez abierto, guárdelo
                en un lugar fresco y déselo a su perro en un plazo de 3 días.
                Consejo de experto: Perfecto congelado como helado para perros o
                mezolado con el agua de bebida como sabroso complemento. Bajo en
                calorías y fácil de digerir para cualquier perro
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
