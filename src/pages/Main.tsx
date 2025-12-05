import { useState, useEffect, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/main/logo.svg";
import arrowIcon from "../assets/main/Arrow.svg";
import productImage from "../assets/main/image 6.svg";
import mobileHeader from "../assets/main/Header-mobile.svg";
import molecule7 from "../assets/molecules/молекула ивосидениба 7.svg";
import molecule17 from "../assets/molecules/молекула ивосидениба 17.svg";
import molecule20 from "../assets/molecules/молекула ивосидениба 20.svg";
import molecule13 from "../assets/molecules/молекула ивосидениба 13.svg";
import molecule16 from "../assets/molecules/молекула ивосидениба 16.svg";
import Footer from "../components/Footer";
import Warning from "../components/Warning";

function Main() {
  const [opacity, setOpacity] = useState(1);
  const navigate = useNavigate();

  const withMoleculeAnimation = (
    overrides: CSSProperties,
    appearDelay: string,
    floatDelay: string = "0s",
    rotateDelay: string = "0s"
  ): CSSProperties =>
    ({
      ...overrides,
      "--appear-delay": appearDelay,
      "--float-delay": floatDelay,
      "--rotate-delay": rotateDelay,
    } as CSSProperties);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Уменьшаем opacity при прокрутке вверх (чем больше scrollY, тем меньше opacity)
      // Максимальная прозрачность при scrollY = 600px (более плавное изменение)
      const newOpacity = Math.max(0, 1 - scrollY / 600);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardClick = (cardTitle: string) => {
    if (cardTitle === "Холангиокарцинома") {
      window.open("https://andreyemc.github.io/tibsovo/");
    } else if (cardTitle === "Острый миелоидный лейкоз") {
      alert("Страница в разработке.");
    }
  };
  const cards = [
    {
      title: "Холангиокарцинома",
      text: "Препарат ТИБСОВО® в режиме монотерапии показан к применению для лечения взрослых пациентов с местнораспространенной \nили метастатической холангиокарциномой \nс мутацией в гене IDH1 R132, ранее получавших лечение, как минимум, в рамках одной линии системной терапии.",
      color: "#61279E",
    },
    {
      title: "Острый миелоидный лейкоз",
      text: "Препарат ТИБСОВО® в комбинации \nс азацитидином показан к применению для лечения взрослых пациентов с впервые диагностированным острым миелоидным лейкозом (ОМЛ) с мутацией в гене изоцитратдегидрогеназы-1 (IDH1) R132, \nкоторым не показана стандартная \nиндукционная химиотерапия.",
      color: "#87A9E2",
    },
  ];

  return (
    <>
      {/* Мобильная версия */}
      <div className="block md:hidden w-full">
        {/* Background Molecules Mobile */}
        <div
          className="molecule-wrapper"
          style={withMoleculeAnimation(
            {
              position: "fixed",
              top: "2%",
              right: "-10%",
              width: "35%",
              zIndex: 1,
              pointerEvents: "none",
            },
            "0.15s",
            "-5s",
            "-2s"
          )}
        >
          <img src={molecule7} alt="" className="molecule-image" />
        </div>

        {/* Мобильная версия Header */}
        <div className="w-full">
          <img
            src={mobileHeader}
            alt=""
            className="w-full h-auto"
            style={{
              objectFit: "contain",
              borderRadius: "0",
            }}
          />
        </div>

        {/* Мобильная версия контента */}
        <div className="w-full max-w-[480px] mx-auto px-4 relative z-10">
          <div className="w-full max-w-[343px] mx-auto mt-2 flex flex-col items-stretch">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-between rounded-[16px] px-6 py-6 card-hover"
                style={{
                  backgroundColor: card.color,
                  marginTop: index > 0 ? "8px" : "0",
                  cursor: "pointer",
                }}
                onClick={() => handleCardClick(card.title)}
              >
                {/* Контент */}
                <div className="w-full flex flex-col items-stretch text-white flex-1">
                  {/* Заголовок */}
                  <h3 className="text-white text-[20px] font-semibold leading-[1.2] tracking-[-0.4px]">
                    {card.title}
                  </h3>

                  {/* Текст */}
                  <p
                    className="text-white text-xs font-normal leading-[17px] mt-4 whitespace-pre-line"
                    style={{ wordBreak: "break-word" }}
                  >
                    {card.text}
                  </p>
                </div>

                {/* Иконка стрелки в правом нижнем углу */}
                <div className="w-full flex items-center justify-end gap-2 mt-4">
                  <p className="text-[12px] font-[600] text-white">
                    Перейти на сайт
                  </p>
                  <div
                    className="relative flex items-center justify-center shrink-0"
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    <img
                      src={arrowIcon}
                      alt=""
                      className="w-full h-full"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Блок с фото препарата - мобильная версия */}
          <div className="w-full max-w-[277px] mx-auto mt-8 flex items-center justify-center">
            <img
              src={productImage}
              alt="Препарат ТИБСОВО"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Десктопная версия */}
      <div className="hidden md:block">
        {/* Top Left Molecule (Orange) - 17 */}
        <div
          className="molecule-wrapper"
          style={withMoleculeAnimation(
            {
              position: "fixed",
              top: "-2%",
              left: "-2%",
              width: "20%",
              zIndex: 1,
              pointerEvents: "none",
            },
            "0s",
            "-12s",
            "-4s"
          )}
        >
          <img src={molecule17} alt="" className="molecule-image" />
        </div>

        {/* Top Right Molecule - 20 */}
        <div
          className="molecule-wrapper"
          style={withMoleculeAnimation(
            {
              position: "fixed",
              top: "5%",
              right: "-5%",
              width: "18%",
              zIndex: 1,
              pointerEvents: "none",
            },
            "0.25s",
            "-7s",
            "-10s"
          )}
        >
          <img src={molecule20} alt="" className="molecule-image" />
        </div>

        {/* Middle Left Molecule - 13 */}
        <div
          className="molecule-wrapper"
          style={withMoleculeAnimation(
            {
              position: "fixed",
              top: "45%",
              left: "-5%",
              width: "15%",
              zIndex: 1,
              pointerEvents: "none",
            },
            "0.4s",
            "-3s",
            "-13s"
          )}
        >
          <img src={molecule13} alt="" className="molecule-image" />
        </div>

        {/* Bottom Right Molecule - 16 */}
        <div
          className="molecule-wrapper"
          style={withMoleculeAnimation(
            {
              position: "fixed",
              bottom: "10%",
              right: "-2%",
              width: "18%",
              zIndex: 1,
              pointerEvents: "none",
            },
            "0.55s",
            "-15s",
            "-8s"
          )}
        >
          <img src={molecule16} alt="" className="molecule-image" />
        </div>

        <div
          className={"md:z-0 z-10"}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            width: "100%",
            opacity: opacity,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <section
            className="w-full bg-white py-12 md:py-5 "
            style={{
              fontFamily:
                "Geist, -apple-system, Roboto, Helvetica, sans-serif ",
            }}
          >
            {/* Логотип */}
            <div className="w-full max-w-[1360px] mx-auto px-4 md:px-5 mb-8 md:mb-14">
              <div className="w-full flex items-center justify-center px-4 py-4 md:px-6 md:py-4">
                <div className="w-[100px] h-[28px] md:w-[491px] md:h-auto flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-auto"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-[904px] mx-auto">
              <div
                className="w-full flex items-center justify-start flex-wrap"
                style={{ gap: "8px" }}
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex-1 min-w-[240px] flex flex-col justify-between rounded-[20px] px-5 py-8 md:px-8 md:py-8 card-hover"
                    style={{
                      backgroundColor: card.color,
                      minHeight: "380px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleCardClick(card.title)}
                  >
                    {/* Контент */}
                    <div className="w-full flex flex-col items-stretch text-white flex-1">
                      {/* Заголовок */}
                      <h3 className="text-white text-2xl font-semibold leading-[1.2] tracking-[-0.48px]">
                        {card.title}
                      </h3>

                      {/* Текст */}
                      <p
                        className="text-white text-base font-normal leading-[22px] mt-5 whitespace-pre-line"
                        style={{ wordBreak: "break-word" }}
                      >
                        {card.text}
                      </p>
                    </div>

                    {/* Иконка стрелки в правом нижнем углу */}
                    <div className="w-full flex items-center justify-end gap-2 mt-auto">
                      <p className="text-[16px] font-[600] text-white">
                        Перейти на сайт
                      </p>
                      <div
                        className="relative flex items-center justify-center shrink-0"
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <img
                          src={arrowIcon}
                          alt=""
                          className="w-full h-full"
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Отступ для фиксированного блока */}
        <div style={{ height: "600px" }}></div>

        {/* Блок с фото препарата */}
        <section
          className="relative w-full overflow-hidden py-12 md:py-5"
          style={{
            fontFamily: "Geist, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          <div className="w-full mx-auto mt-8 md:mt-16 flex items-center justify-center">
            <div className="w-[445px] flex items-center justify-center">
              <img
                src={productImage}
                alt="Препарат ТИБСОВО"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
        {/* Отступ для фиксированного блока */}
        <div style={{ height: "100px" }}></div>
      </div>
      <Footer />
      <Warning />
    </>
  );
}

export default Main;
