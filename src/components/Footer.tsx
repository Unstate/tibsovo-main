import logo from '../assets/logo-white.svg'

function Footer() {
  return (
    <footer
      className="relative z-50 w-full flex flex-col items-center justify-center px-4 md:px-5 lg:px-20 py-6 md:py-10 mt-4 bg-[#f2f1fb]"
    >
      <div
        className="w-full flex flex-col items-start max-w-[1140px]"
      >
        {/* Два горизонтальных блока */}
        <div
          className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 lg:gap-24"
        >
          {/* Левый блок */}
          <div
            className="flex flex-col items-start flex-1 w-full md:w-auto"
          >
            {/* Логотип */}
            <div
              className="flex items-center justify-center min-h-[24px] md:min-h-[30px] w-[120px] md:w-[150px]"
            >
              <img
                src={logo}
                alt="Servier Logo"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Колонка 1: Адрес офиса */}
            <div
              className="flex flex-col items-start mt-6 md:mt-12 text-[10px] md:text-xs text-[#151518] font-normal"
            >
              <p
                className="text-[#151518] font-bold leading-[1.25] uppercase"
              >
                Адрес офиса:
              </p>
              <p
                className="text-[#151518] mt-4 md:mt-[23px]"
              >
                АО «Сервье»:
              </p>
              <p
                className="text-[#151518] leading-[14px] md:leading-[18px] whitespace-pre-line"
              >
                {`125196, Москва, ул. Лесная, д.7, этажи 7/8/9
Бизнес-центр Белые Сады`}
              </p>
              <a
                href='tel:+74959370700'
                target='_blank'
                className="text-[#151518]"
              >
                Телефон: +7 495 937-07-00
              </a>
              <a
                href="mailto:ru.communications@servier.com"
                target='_blank'
                className="text-[#151518] mt-2 md:mt-[13px]"
              >
                ru.communications@servier.com
              </a>
              <a
                href='tel:+74952258010'
                target='_blank'
                className="text-[#151518] leading-[14px] md:leading-[18px] mt-2 md:mt-[11px]"
              >
                ООО «СЕРВЬЕ РУС», 108828 г. Москва, пос. Краснопахорское, квартал 158, вл.2, стр.1, кабинет 169
                <br /> Тел. +7 (495) 225-80-10
              </a>
            </div>
          </div>

          {/* Правый блок */}
          <div
            className="flex flex-col items-start flex-1 md:flex-3 w-full md:w-auto mt-6 md:mt-0"
          >
            {/* материал */}
            <p
              className="text-[#151518] text-sm md:text-[20px] font-normal uppercase leading-[140%] md:leading-normal"
            >
              материал предназначен для специалистов здравоохранения
            </p>

            {/* Колонка 2 и Колонка 3 */}
            <div
              className="w-full flex flex-col lg:flex-row items-start mt-6 md:mt-12 gap-6 md:gap-x-[93px] md:gap-y-10"
            >
              {/* Колонка 2: Сообщить о нежелательном явлении */}
              <div
                className="flex flex-col items-stretch flex-1 min-w-0 md:min-w-[200px] pr-0 md:pr-[1px]"
              >
                <p
                  className="text-[#151518] text-[10px] md:text-xs font-bold leading-[20px] md:leading-[30px] uppercase"
                >
                  Сообщить о нежелательном явлении
                </p>
                <p
                  className="text-[#151518] text-[10px] md:text-xs font-normal leading-[14px] md:leading-[18px] mt-4 md:mt-[30px] whitespace-pre-line"
                >
                  передать запрос по препарату или связаться по другим вопросам Вы можете через форму обратной связи
                </p>
                <a
                  href='https://servier.ru/#form'
                  target='_blank'
                  className="flex items-center justify-center mt-4 md:mt-8 rounded-[5px] border border-[#151518] w-full md:w-[257px] max-w-full pl-4 md:pl-5 pr-4 md:pr-5 pt-3 md:pt-[18px] pb-3 md:pb-5 gap-3 md:gap-5 bg-transparent cursor-pointer transition-opacity duration-200 hover:opacity-80"
                >
                  <span
                    className="text-[#151518] text-center text-xs md:text-sm font-bold leading-[1.14]"
                  >
                    Форма обратной связи
                  </span>
                  <div
                    className="w-3 md:w-4 min-h-[10px] md:min-h-[12px] flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-2.5 md:w-4 md:h-3"
                    >
                      <path
                        d="M1 6H15M15 6L10 1M15 6L10 11"
                        stroke="#151518"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Колонка 3: ТИБСОВО® и условия использования */}
              <div
                className="flex flex-col items-stretch flex-1 min-w-0 md:min-w-[200px] text-[10px] md:text-xs text-[#151518] font-normal leading-[16px] md:leading-6 justify-center"
              >
                <p className="text-[#151518]">
                  ТИБСОВО® <br /><span className="text-black">РУ ЛП-№(012213)-(РГ-RU)</span>
                </p>
                <a 
                  href='https://servier.ru/terms-of-use/ '
                  target='_blank'
                  className="text-[#151518] mt-3 md:mt-4"
                >
                  Условия использования
                </a>
                <a
                  href='https://servier.ru/politika-v-otnoshenii-obrabotki-personalnyh-dannyh/'
                  target='_blank'
                  className="text-[#151518] mt-3 md:mt-4"
                >
                  Политика в отношении обработки персональных данных
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <p
          className="text-[#151518] text-[10px] md:text-xs font-normal opacity-50 mt-4 md:mt-[12px]"
        >
          © 2025 LES LABORATOIRES SERVIER. АО «Сервье». Все права защищены
        </p>
      </div>
    </footer>
  )
}

export default Footer

