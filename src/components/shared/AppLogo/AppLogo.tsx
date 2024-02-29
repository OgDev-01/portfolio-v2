"use client";
import { useTheme } from "next-themes";
import ClientOnly from "../ClientOnly/ClientOnly";

const AppLogo = () => {
  const { theme } = useTheme();

  // return light logo on the server until the client takes over
  if (typeof window === "undefined") {
    return (
      <>
        <svg
          width="114"
          height="19"
          viewBox="0 0 114 19"
          className="md:hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9C1.575 9 1.975 8.625 2.45 7.025C3.175 4.575 5.35 2.45 8.05 1.625C8.775 1.4 9.075 1.125 9.075 0.750001C9.075 0.475 8.875 0.25 8.325 0.25H1C0.675 0.25 0.45 1.2 0.45 4.625C0.45 8.05 0.675 9 1 9ZM18.3 7.025C18.775 8.625 19.175 9 19.75 9V0.25H12.425C11.875 0.25 11.675 0.475 11.675 0.750001C11.675 1.125 11.975 1.4 12.7 1.625C15.4 2.45 17.575 4.575 18.3 7.025ZM12.125 9.65C12.125 10.125 11.9 10.525 11.55 10.8C11.4 10.9 11.025 11.15 11.025 11.625V13.475C11.025 14.125 11.45 14.225 11.825 14.075C13.7 13.425 15.075 11.7 15.075 9.625C15.075 7.6 13.725 5.825 11.825 5.15C11.475 5.025 11.025 5.2 11.025 5.775V7.6C11.025 8.15 11.425 8.35 11.55 8.45C11.925 8.725 12.125 9.175 12.125 9.65ZM8.625 9.65C8.625 9.175 8.825 8.725 9.2 8.45C9.325 8.35 9.725 8.15 9.725 7.6V5.775C9.725 5.2 9.275 5.025 8.925 5.15C7.025 5.825 5.675 7.6 5.675 9.625C5.675 11.7 7.05 13.425 8.925 14.075C9.3 14.225 9.725 14.125 9.725 13.475V11.625C9.725 11.15 9.35 10.9 9.2 10.8C8.85 10.525 8.625 10.125 8.625 9.65ZM1 19H8.325C8.875 19 9.075 18.775 9.075 18.5C9.075 18.125 8.775 17.85 8.05 17.625C5.35 16.8 3.175 14.675 2.45 12.225C1.975 10.625 1.575 10.25 1 10.25C0.675 10.25 0.45 11.2 0.45 14.625C0.45 18.05 0.675 19 1 19ZM18.3 12.225C17.575 14.675 15.4 16.8 12.7 17.625C11.975 17.85 11.675 18.125 11.675 18.5C11.675 18.775 11.875 19 12.425 19H19.75V10.25C19.175 10.25 18.775 10.625 18.3 12.225ZM19.75 9C20.325 9 20.725 8.625 21.2 7.025C21.925 4.575 24.1 2.45 26.8 1.625C27.525 1.4 27.825 1.125 27.825 0.750001C27.825 0.475 27.625 0.25 27.075 0.25H19.75C19.425 0.25 19.2 1.2 19.2 4.625C19.2 8.05 19.425 9 19.75 9ZM34.525 8.125H35.45C36.9 8.125 37.275 9 38.5 9V0.25H31.175C30.625 0.25 30.425 0.475 30.425 0.750001C30.425 1.125 30.725 1.4 31.45 1.625C33.25 2.175 34.75 3.175 35.675 4.55C36.2 5.325 35.875 5.9 35.325 6.175L34.325 6.675C33.7 7 33.525 7.225 33.55 7.475C33.55 7.8 33.875 8.125 34.525 8.125ZM27.625 10.325V9.2C27.625 8.525 28.1 8.125 28.8 8.125H31.375C32.325 8.125 33 7.175 32.325 6.275C31.55 5.375 30.3 4.9 29.125 4.9C26.55 4.9 24.425 7.05 24.425 9.625C24.425 12.2 26.55 14.325 29.125 14.325C31.4 14.325 32.775 13.35 33.3 11.925C33.45 11.55 33.3 11.275 32.875 11.275H28.8C28.05 11.275 27.625 10.75 27.625 10.325ZM19.75 19H27.075C27.625 19 27.825 18.775 27.825 18.5C27.825 18.125 27.525 17.85 26.8 17.625C24.1 16.8 21.925 14.675 21.2 12.225C20.725 10.625 20.325 10.25 19.75 10.25C19.425 10.25 19.2 11.2 19.2 14.625C19.2 18.05 19.425 19 19.75 19ZM37.225 12.55V17.75C37.225 18.375 37.45 19 38.5 19V10.25C37.725 10.25 37.225 10.875 37.225 12.55ZM34.275 15.5C34.1 15.5 33.925 15.625 33.775 15.85C33.2 16.65 32.125 17.425 31.175 17.775C30.7 17.95 30.425 18.15 30.425 18.5C30.425 18.775 30.625 19 31.175 19H35.6C36.175 19 36.35 18.9 36.15 18.15C35.55 15.9 34.75 15.5 34.275 15.5ZM38.5 19C40.125 19 40.2 17.75 42 17.75H53.75C55.55 17.75 55.625 19 57.25 19V10.25H56.125C55.75 10.25 55.5 10 55.5 9.625C55.5 9.25 55.75 9 56.125 9H57.25V0.25H38.5C38.175 0.25 37.95 1.2 37.95 4.625C37.95 8.05 38.175 9 38.5 9H39.625C40 9 40.25 9.25 40.25 9.625C40.25 10 40 10.25 39.625 10.25H38.5C38.175 10.25 37.95 11.2 37.95 14.625C37.95 18.05 38.175 19 38.5 19ZM57.25 9H58.75C59.45 9 60 8.45 60 7.75V1.5C60 0.800001 59.45 0.25 58.75 0.25H57.25C56.925 0.25 56.7 1.2 56.7 4.625C56.7 8.05 56.925 9 57.25 9ZM73.9 6.675C74.7 8.675 75.225 9 76 9V0.25H66.125C65.775 0.25 65.65 0.375 65.65 0.525C65.65 0.675 65.675 0.875 66.15 0.950001C69.75 1.45 72.9 4.15 73.9 6.675ZM63.875 14.575C63.875 15.25 64.4 15.25 64.825 15.225C68.05 14.975 70.575 13.15 70.575 9.625C70.575 6.1 68.1 4.275 64.825 4.025C64.425 4 63.875 4.05 63.875 4.675V14.575ZM73.9 12.575C72.9 15.1 69.75 17.8 66.15 18.3C65.675 18.375 65.65 18.575 65.65 18.725C65.65 18.875 65.775 19 66.125 19H76V10.25C75.225 10.25 74.7 10.575 73.9 12.575ZM57.25 19H58.75C59.45 19 60 18.45 60 17.75V11.5C60 10.8 59.45 10.25 58.75 10.25H57.25C56.925 10.25 56.7 11.2 56.7 14.625C56.7 18.05 56.925 19 57.25 19ZM82.575 6.775C82.575 7.475 83.125 8.025 83.825 8.025H89.65C90.625 8.025 90.45 9 91.75 9H94.75V0.25H94.25C92.875 0.25 94.475 3.225 92.45 3.225H83.825C83.125 3.225 82.575 3.775 82.575 4.475V6.775ZM76 9H77.5C78.2 9 78.75 8.425 78.75 7.7V1.5C78.75 0.800001 78.2 0.25 77.5 0.25H76C75.675 0.25 75.45 1.2 75.45 4.625C75.45 8.05 75.675 9 76 9ZM76 19H77.5C78.2 19 78.75 18.45 78.75 17.75V11.5C78.75 10.8 78.2 10.25 77.5 10.25H76C75.675 10.25 75.45 11.2 75.45 14.625C75.45 18.05 75.675 19 76 19ZM82.575 12.475V14.75C82.575 15.45 83.125 16 83.825 16H92.45C94.475 16 92.875 19 94.25 19H94.75V10.25H91.75C90.45 10.25 90.625 11.175 89.65 11.175H83.825C83.125 11.175 82.575 11.75 82.575 12.475ZM102.85 17.025C102.95 17.875 103.4 18.525 104.1 18.525H104.175C104.875 18.525 105.325 17.875 105.425 17.025L107.375 1.75C107.475 0.900001 106.825 0.25 106.125 0.25H102.125C101.425 0.25 100.775 0.900001 100.875 1.75L102.85 17.025ZM112.8 0.25C112.1 0.25 111.65 0.775 111.55 1.5L110.6 7.7C110.5 8.4 111 9 111.725 9H113.5V0.25H112.8ZM94.75 9H96.625C97.35 9 97.85 8.4 97.75 7.7L96.8 1.5C96.7 0.775 96.25 0.25 95.55 0.25H94.75C94.425 0.25 94.2 1.2 94.2 4.625C94.2 8.05 94.425 9 94.75 9ZM94.75 19H98.05C99 19 99.4 18.475 99.3 17.75L98.325 11.425C98.2 10.675 97.7 10.25 96.95 10.25H94.75C94.425 10.25 94.2 11.2 94.2 14.625C94.2 18.05 94.425 19 94.75 19ZM111.4 10.25C110.65 10.25 110.15 10.675 110.025 11.425L109.05 17.75C108.95 18.475 109.35 19 110.3 19H113.5V10.25H111.4Z"
            fill={"#0A0A0A"}
          />
        </svg>
        <svg
          width="227"
          height="38"
          viewBox="0 0 227 38"
          fill="none"
          className="hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 18C3.15 18 3.95 17.25 4.9 14.05C6.35 9.15 10.7 4.9 16.1 3.25C17.55 2.8 18.15 2.25 18.15 1.5C18.15 0.950001 17.75 0.5 16.65 0.5H2C1.35 0.5 0.9 2.4 0.9 9.25C0.9 16.1 1.35 18 2 18ZM36.6 14.05C37.55 17.25 38.35 18 39.5 18V0.5H24.85C23.75 0.5 23.35 0.950001 23.35 1.5C23.35 2.25 23.95 2.8 25.4 3.25C30.8 4.9 35.15 9.15 36.6 14.05ZM24.25 19.3C24.25 20.25 23.8 21.05 23.1 21.6C22.8 21.8 22.05 22.3 22.05 23.25V26.95C22.05 28.25 22.9 28.45 23.65 28.15C27.4 26.85 30.15 23.4 30.15 19.25C30.15 15.2 27.45 11.65 23.65 10.3C22.95 10.05 22.05 10.4 22.05 11.55V15.2C22.05 16.3 22.85 16.7 23.1 16.9C23.85 17.45 24.25 18.35 24.25 19.3ZM17.25 19.3C17.25 18.35 17.65 17.45 18.4 16.9C18.65 16.7 19.45 16.3 19.45 15.2V11.55C19.45 10.4 18.55 10.05 17.85 10.3C14.05 11.65 11.35 15.2 11.35 19.25C11.35 23.4 14.1 26.85 17.85 28.15C18.6 28.45 19.45 28.25 19.45 26.95V23.25C19.45 22.3 18.7 21.8 18.4 21.6C17.7 21.05 17.25 20.25 17.25 19.3ZM2 38H16.65C17.75 38 18.15 37.55 18.15 37C18.15 36.25 17.55 35.7 16.1 35.25C10.7 33.6 6.35 29.35 4.9 24.45C3.95 21.25 3.15 20.5 2 20.5C1.35 20.5 0.9 22.4 0.9 29.25C0.9 36.1 1.35 38 2 38ZM36.6 24.45C35.15 29.35 30.8 33.6 25.4 35.25C23.95 35.7 23.35 36.25 23.35 37C23.35 37.55 23.75 38 24.85 38H39.5V20.5C38.35 20.5 37.55 21.25 36.6 24.45ZM39.5 18C40.65 18 41.45 17.25 42.4 14.05C43.85 9.15 48.2 4.9 53.6 3.25C55.05 2.8 55.65 2.25 55.65 1.5C55.65 0.950001 55.25 0.5 54.15 0.5H39.5C38.85 0.5 38.4 2.4 38.4 9.25C38.4 16.1 38.85 18 39.5 18ZM69.05 16.25H70.9C73.8 16.25 74.55 18 77 18V0.5H62.35C61.25 0.5 60.85 0.950001 60.85 1.5C60.85 2.25 61.45 2.8 62.9 3.25C66.5 4.35 69.5 6.35 71.35 9.1C72.4 10.65 71.75 11.8 70.65 12.35L68.65 13.35C67.4 14 67.05 14.45 67.1 14.95C67.1 15.6 67.75 16.25 69.05 16.25ZM55.25 20.65V18.4C55.25 17.05 56.2 16.25 57.6 16.25H62.75C64.65 16.25 66 14.35 64.65 12.55C63.1 10.75 60.6 9.8 58.25 9.8C53.1 9.8 48.85 14.1 48.85 19.25C48.85 24.4 53.1 28.65 58.25 28.65C62.8 28.65 65.55 26.7 66.6 23.85C66.9 23.1 66.6 22.55 65.75 22.55H57.6C56.1 22.55 55.25 21.5 55.25 20.65ZM39.5 38H54.15C55.25 38 55.65 37.55 55.65 37C55.65 36.25 55.05 35.7 53.6 35.25C48.2 33.6 43.85 29.35 42.4 24.45C41.45 21.25 40.65 20.5 39.5 20.5C38.85 20.5 38.4 22.4 38.4 29.25C38.4 36.1 38.85 38 39.5 38ZM74.45 25.1V35.5C74.45 36.75 74.9 38 77 38V20.5C75.45 20.5 74.45 21.75 74.45 25.1ZM68.55 31C68.2 31 67.85 31.25 67.55 31.7C66.4 33.3 64.25 34.85 62.35 35.55C61.4 35.9 60.85 36.3 60.85 37C60.85 37.55 61.25 38 62.35 38H71.2C72.35 38 72.7 37.8 72.3 36.3C71.1 31.8 69.5 31 68.55 31ZM77 38C80.25 38 80.4 35.5 84 35.5H107.5C111.1 35.5 111.25 38 114.5 38V20.5H112.25C111.5 20.5 111 20 111 19.25C111 18.5 111.5 18 112.25 18H114.5V0.5H77C76.35 0.5 75.9 2.4 75.9 9.25C75.9 16.1 76.35 18 77 18H79.25C80 18 80.5 18.5 80.5 19.25C80.5 20 80 20.5 79.25 20.5H77C76.35 20.5 75.9 22.4 75.9 29.25C75.9 36.1 76.35 38 77 38ZM114.5 18H117.5C118.9 18 120 16.9 120 15.5V3C120 1.6 118.9 0.5 117.5 0.5H114.5C113.85 0.5 113.4 2.4 113.4 9.25C113.4 16.1 113.85 18 114.5 18ZM147.8 13.35C149.4 17.35 150.45 18 152 18V0.5H132.25C131.55 0.5 131.3 0.750001 131.3 1.05C131.3 1.35 131.35 1.75 132.3 1.9C139.5 2.9 145.8 8.3 147.8 13.35ZM127.75 29.15C127.75 30.5 128.8 30.5 129.65 30.45C136.1 29.95 141.15 26.3 141.15 19.25C141.15 12.2 136.2 8.55 129.65 8.05C128.85 8 127.75 8.1 127.75 9.35V29.15ZM147.8 25.15C145.8 30.2 139.5 35.6 132.3 36.6C131.35 36.75 131.3 37.15 131.3 37.45C131.3 37.75 131.55 38 132.25 38H152V20.5C150.45 20.5 149.4 21.15 147.8 25.15ZM114.5 38H117.5C118.9 38 120 36.9 120 35.5V23C120 21.6 118.9 20.5 117.5 20.5H114.5C113.85 20.5 113.4 22.4 113.4 29.25C113.4 36.1 113.85 38 114.5 38ZM165.15 13.55C165.15 14.95 166.25 16.05 167.65 16.05H179.3C181.25 16.05 180.9 18 183.5 18H189.5V0.5H188.5C185.75 0.5 188.95 6.45 184.9 6.45H167.65C166.25 6.45 165.15 7.55 165.15 8.95V13.55ZM152 18H155C156.4 18 157.5 16.85 157.5 15.4V3C157.5 1.6 156.4 0.5 155 0.5H152C151.35 0.5 150.9 2.4 150.9 9.25C150.9 16.1 151.35 18 152 18ZM152 38H155C156.4 38 157.5 36.9 157.5 35.5V23C157.5 21.6 156.4 20.5 155 20.5H152C151.35 20.5 150.9 22.4 150.9 29.25C150.9 36.1 151.35 38 152 38ZM165.15 24.95V29.5C165.15 30.9 166.25 32 167.65 32H184.9C188.95 32 185.75 38 188.5 38H189.5V20.5H183.5C180.9 20.5 181.25 22.35 179.3 22.35H167.65C166.25 22.35 165.15 23.5 165.15 24.95ZM205.7 34.05C205.9 35.75 206.8 37.05 208.2 37.05H208.35C209.75 37.05 210.65 35.75 210.85 34.05L214.75 3.5C214.95 1.8 213.65 0.5 212.25 0.5H204.25C202.85 0.5 201.55 1.8 201.75 3.5L205.7 34.05ZM225.6 0.5C224.2 0.5 223.3 1.55 223.1 3L221.2 15.4C221 16.8 222 18 223.45 18H227V0.5H225.6ZM189.5 18H193.25C194.7 18 195.7 16.8 195.5 15.4L193.6 3C193.4 1.55 192.5 0.5 191.1 0.5H189.5C188.85 0.5 188.4 2.4 188.4 9.25C188.4 16.1 188.85 18 189.5 18ZM189.5 38H196.1C198 38 198.8 36.95 198.6 35.5L196.65 22.85C196.4 21.35 195.4 20.5 193.9 20.5H189.5C188.85 20.5 188.4 22.4 188.4 29.25C188.4 36.1 188.85 38 189.5 38ZM222.8 20.5C221.3 20.5 220.3 21.35 220.05 22.85L218.1 35.5C217.9 36.95 218.7 38 220.6 38H227V20.5H222.8Z"
            fill={"#0A0A0A"}
          />
        </svg>
      </>
    );
  }

  return (
    <ClientOnly>
      {/* Mobile version */}
      <svg
        width="114"
        height="19"
        viewBox="0 0 114 19"
        className="md:hidden"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 9C1.575 9 1.975 8.625 2.45 7.025C3.175 4.575 5.35 2.45 8.05 1.625C8.775 1.4 9.075 1.125 9.075 0.750001C9.075 0.475 8.875 0.25 8.325 0.25H1C0.675 0.25 0.45 1.2 0.45 4.625C0.45 8.05 0.675 9 1 9ZM18.3 7.025C18.775 8.625 19.175 9 19.75 9V0.25H12.425C11.875 0.25 11.675 0.475 11.675 0.750001C11.675 1.125 11.975 1.4 12.7 1.625C15.4 2.45 17.575 4.575 18.3 7.025ZM12.125 9.65C12.125 10.125 11.9 10.525 11.55 10.8C11.4 10.9 11.025 11.15 11.025 11.625V13.475C11.025 14.125 11.45 14.225 11.825 14.075C13.7 13.425 15.075 11.7 15.075 9.625C15.075 7.6 13.725 5.825 11.825 5.15C11.475 5.025 11.025 5.2 11.025 5.775V7.6C11.025 8.15 11.425 8.35 11.55 8.45C11.925 8.725 12.125 9.175 12.125 9.65ZM8.625 9.65C8.625 9.175 8.825 8.725 9.2 8.45C9.325 8.35 9.725 8.15 9.725 7.6V5.775C9.725 5.2 9.275 5.025 8.925 5.15C7.025 5.825 5.675 7.6 5.675 9.625C5.675 11.7 7.05 13.425 8.925 14.075C9.3 14.225 9.725 14.125 9.725 13.475V11.625C9.725 11.15 9.35 10.9 9.2 10.8C8.85 10.525 8.625 10.125 8.625 9.65ZM1 19H8.325C8.875 19 9.075 18.775 9.075 18.5C9.075 18.125 8.775 17.85 8.05 17.625C5.35 16.8 3.175 14.675 2.45 12.225C1.975 10.625 1.575 10.25 1 10.25C0.675 10.25 0.45 11.2 0.45 14.625C0.45 18.05 0.675 19 1 19ZM18.3 12.225C17.575 14.675 15.4 16.8 12.7 17.625C11.975 17.85 11.675 18.125 11.675 18.5C11.675 18.775 11.875 19 12.425 19H19.75V10.25C19.175 10.25 18.775 10.625 18.3 12.225ZM19.75 9C20.325 9 20.725 8.625 21.2 7.025C21.925 4.575 24.1 2.45 26.8 1.625C27.525 1.4 27.825 1.125 27.825 0.750001C27.825 0.475 27.625 0.25 27.075 0.25H19.75C19.425 0.25 19.2 1.2 19.2 4.625C19.2 8.05 19.425 9 19.75 9ZM34.525 8.125H35.45C36.9 8.125 37.275 9 38.5 9V0.25H31.175C30.625 0.25 30.425 0.475 30.425 0.750001C30.425 1.125 30.725 1.4 31.45 1.625C33.25 2.175 34.75 3.175 35.675 4.55C36.2 5.325 35.875 5.9 35.325 6.175L34.325 6.675C33.7 7 33.525 7.225 33.55 7.475C33.55 7.8 33.875 8.125 34.525 8.125ZM27.625 10.325V9.2C27.625 8.525 28.1 8.125 28.8 8.125H31.375C32.325 8.125 33 7.175 32.325 6.275C31.55 5.375 30.3 4.9 29.125 4.9C26.55 4.9 24.425 7.05 24.425 9.625C24.425 12.2 26.55 14.325 29.125 14.325C31.4 14.325 32.775 13.35 33.3 11.925C33.45 11.55 33.3 11.275 32.875 11.275H28.8C28.05 11.275 27.625 10.75 27.625 10.325ZM19.75 19H27.075C27.625 19 27.825 18.775 27.825 18.5C27.825 18.125 27.525 17.85 26.8 17.625C24.1 16.8 21.925 14.675 21.2 12.225C20.725 10.625 20.325 10.25 19.75 10.25C19.425 10.25 19.2 11.2 19.2 14.625C19.2 18.05 19.425 19 19.75 19ZM37.225 12.55V17.75C37.225 18.375 37.45 19 38.5 19V10.25C37.725 10.25 37.225 10.875 37.225 12.55ZM34.275 15.5C34.1 15.5 33.925 15.625 33.775 15.85C33.2 16.65 32.125 17.425 31.175 17.775C30.7 17.95 30.425 18.15 30.425 18.5C30.425 18.775 30.625 19 31.175 19H35.6C36.175 19 36.35 18.9 36.15 18.15C35.55 15.9 34.75 15.5 34.275 15.5ZM38.5 19C40.125 19 40.2 17.75 42 17.75H53.75C55.55 17.75 55.625 19 57.25 19V10.25H56.125C55.75 10.25 55.5 10 55.5 9.625C55.5 9.25 55.75 9 56.125 9H57.25V0.25H38.5C38.175 0.25 37.95 1.2 37.95 4.625C37.95 8.05 38.175 9 38.5 9H39.625C40 9 40.25 9.25 40.25 9.625C40.25 10 40 10.25 39.625 10.25H38.5C38.175 10.25 37.95 11.2 37.95 14.625C37.95 18.05 38.175 19 38.5 19ZM57.25 9H58.75C59.45 9 60 8.45 60 7.75V1.5C60 0.800001 59.45 0.25 58.75 0.25H57.25C56.925 0.25 56.7 1.2 56.7 4.625C56.7 8.05 56.925 9 57.25 9ZM73.9 6.675C74.7 8.675 75.225 9 76 9V0.25H66.125C65.775 0.25 65.65 0.375 65.65 0.525C65.65 0.675 65.675 0.875 66.15 0.950001C69.75 1.45 72.9 4.15 73.9 6.675ZM63.875 14.575C63.875 15.25 64.4 15.25 64.825 15.225C68.05 14.975 70.575 13.15 70.575 9.625C70.575 6.1 68.1 4.275 64.825 4.025C64.425 4 63.875 4.05 63.875 4.675V14.575ZM73.9 12.575C72.9 15.1 69.75 17.8 66.15 18.3C65.675 18.375 65.65 18.575 65.65 18.725C65.65 18.875 65.775 19 66.125 19H76V10.25C75.225 10.25 74.7 10.575 73.9 12.575ZM57.25 19H58.75C59.45 19 60 18.45 60 17.75V11.5C60 10.8 59.45 10.25 58.75 10.25H57.25C56.925 10.25 56.7 11.2 56.7 14.625C56.7 18.05 56.925 19 57.25 19ZM82.575 6.775C82.575 7.475 83.125 8.025 83.825 8.025H89.65C90.625 8.025 90.45 9 91.75 9H94.75V0.25H94.25C92.875 0.25 94.475 3.225 92.45 3.225H83.825C83.125 3.225 82.575 3.775 82.575 4.475V6.775ZM76 9H77.5C78.2 9 78.75 8.425 78.75 7.7V1.5C78.75 0.800001 78.2 0.25 77.5 0.25H76C75.675 0.25 75.45 1.2 75.45 4.625C75.45 8.05 75.675 9 76 9ZM76 19H77.5C78.2 19 78.75 18.45 78.75 17.75V11.5C78.75 10.8 78.2 10.25 77.5 10.25H76C75.675 10.25 75.45 11.2 75.45 14.625C75.45 18.05 75.675 19 76 19ZM82.575 12.475V14.75C82.575 15.45 83.125 16 83.825 16H92.45C94.475 16 92.875 19 94.25 19H94.75V10.25H91.75C90.45 10.25 90.625 11.175 89.65 11.175H83.825C83.125 11.175 82.575 11.75 82.575 12.475ZM102.85 17.025C102.95 17.875 103.4 18.525 104.1 18.525H104.175C104.875 18.525 105.325 17.875 105.425 17.025L107.375 1.75C107.475 0.900001 106.825 0.25 106.125 0.25H102.125C101.425 0.25 100.775 0.900001 100.875 1.75L102.85 17.025ZM112.8 0.25C112.1 0.25 111.65 0.775 111.55 1.5L110.6 7.7C110.5 8.4 111 9 111.725 9H113.5V0.25H112.8ZM94.75 9H96.625C97.35 9 97.85 8.4 97.75 7.7L96.8 1.5C96.7 0.775 96.25 0.25 95.55 0.25H94.75C94.425 0.25 94.2 1.2 94.2 4.625C94.2 8.05 94.425 9 94.75 9ZM94.75 19H98.05C99 19 99.4 18.475 99.3 17.75L98.325 11.425C98.2 10.675 97.7 10.25 96.95 10.25H94.75C94.425 10.25 94.2 11.2 94.2 14.625C94.2 18.05 94.425 19 94.75 19ZM111.4 10.25C110.65 10.25 110.15 10.675 110.025 11.425L109.05 17.75C108.95 18.475 109.35 19 110.3 19H113.5V10.25H111.4Z"
          fill={theme === "dark" ? "#FEFEFE" : "#0A0A0A"}
        />
      </svg>

      {/* Desktop version */}
      <svg
        width="227"
        height="38"
        viewBox="0 0 227 38"
        fill="none"
        className="hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 18C3.15 18 3.95 17.25 4.9 14.05C6.35 9.15 10.7 4.9 16.1 3.25C17.55 2.8 18.15 2.25 18.15 1.5C18.15 0.950001 17.75 0.5 16.65 0.5H2C1.35 0.5 0.9 2.4 0.9 9.25C0.9 16.1 1.35 18 2 18ZM36.6 14.05C37.55 17.25 38.35 18 39.5 18V0.5H24.85C23.75 0.5 23.35 0.950001 23.35 1.5C23.35 2.25 23.95 2.8 25.4 3.25C30.8 4.9 35.15 9.15 36.6 14.05ZM24.25 19.3C24.25 20.25 23.8 21.05 23.1 21.6C22.8 21.8 22.05 22.3 22.05 23.25V26.95C22.05 28.25 22.9 28.45 23.65 28.15C27.4 26.85 30.15 23.4 30.15 19.25C30.15 15.2 27.45 11.65 23.65 10.3C22.95 10.05 22.05 10.4 22.05 11.55V15.2C22.05 16.3 22.85 16.7 23.1 16.9C23.85 17.45 24.25 18.35 24.25 19.3ZM17.25 19.3C17.25 18.35 17.65 17.45 18.4 16.9C18.65 16.7 19.45 16.3 19.45 15.2V11.55C19.45 10.4 18.55 10.05 17.85 10.3C14.05 11.65 11.35 15.2 11.35 19.25C11.35 23.4 14.1 26.85 17.85 28.15C18.6 28.45 19.45 28.25 19.45 26.95V23.25C19.45 22.3 18.7 21.8 18.4 21.6C17.7 21.05 17.25 20.25 17.25 19.3ZM2 38H16.65C17.75 38 18.15 37.55 18.15 37C18.15 36.25 17.55 35.7 16.1 35.25C10.7 33.6 6.35 29.35 4.9 24.45C3.95 21.25 3.15 20.5 2 20.5C1.35 20.5 0.9 22.4 0.9 29.25C0.9 36.1 1.35 38 2 38ZM36.6 24.45C35.15 29.35 30.8 33.6 25.4 35.25C23.95 35.7 23.35 36.25 23.35 37C23.35 37.55 23.75 38 24.85 38H39.5V20.5C38.35 20.5 37.55 21.25 36.6 24.45ZM39.5 18C40.65 18 41.45 17.25 42.4 14.05C43.85 9.15 48.2 4.9 53.6 3.25C55.05 2.8 55.65 2.25 55.65 1.5C55.65 0.950001 55.25 0.5 54.15 0.5H39.5C38.85 0.5 38.4 2.4 38.4 9.25C38.4 16.1 38.85 18 39.5 18ZM69.05 16.25H70.9C73.8 16.25 74.55 18 77 18V0.5H62.35C61.25 0.5 60.85 0.950001 60.85 1.5C60.85 2.25 61.45 2.8 62.9 3.25C66.5 4.35 69.5 6.35 71.35 9.1C72.4 10.65 71.75 11.8 70.65 12.35L68.65 13.35C67.4 14 67.05 14.45 67.1 14.95C67.1 15.6 67.75 16.25 69.05 16.25ZM55.25 20.65V18.4C55.25 17.05 56.2 16.25 57.6 16.25H62.75C64.65 16.25 66 14.35 64.65 12.55C63.1 10.75 60.6 9.8 58.25 9.8C53.1 9.8 48.85 14.1 48.85 19.25C48.85 24.4 53.1 28.65 58.25 28.65C62.8 28.65 65.55 26.7 66.6 23.85C66.9 23.1 66.6 22.55 65.75 22.55H57.6C56.1 22.55 55.25 21.5 55.25 20.65ZM39.5 38H54.15C55.25 38 55.65 37.55 55.65 37C55.65 36.25 55.05 35.7 53.6 35.25C48.2 33.6 43.85 29.35 42.4 24.45C41.45 21.25 40.65 20.5 39.5 20.5C38.85 20.5 38.4 22.4 38.4 29.25C38.4 36.1 38.85 38 39.5 38ZM74.45 25.1V35.5C74.45 36.75 74.9 38 77 38V20.5C75.45 20.5 74.45 21.75 74.45 25.1ZM68.55 31C68.2 31 67.85 31.25 67.55 31.7C66.4 33.3 64.25 34.85 62.35 35.55C61.4 35.9 60.85 36.3 60.85 37C60.85 37.55 61.25 38 62.35 38H71.2C72.35 38 72.7 37.8 72.3 36.3C71.1 31.8 69.5 31 68.55 31ZM77 38C80.25 38 80.4 35.5 84 35.5H107.5C111.1 35.5 111.25 38 114.5 38V20.5H112.25C111.5 20.5 111 20 111 19.25C111 18.5 111.5 18 112.25 18H114.5V0.5H77C76.35 0.5 75.9 2.4 75.9 9.25C75.9 16.1 76.35 18 77 18H79.25C80 18 80.5 18.5 80.5 19.25C80.5 20 80 20.5 79.25 20.5H77C76.35 20.5 75.9 22.4 75.9 29.25C75.9 36.1 76.35 38 77 38ZM114.5 18H117.5C118.9 18 120 16.9 120 15.5V3C120 1.6 118.9 0.5 117.5 0.5H114.5C113.85 0.5 113.4 2.4 113.4 9.25C113.4 16.1 113.85 18 114.5 18ZM147.8 13.35C149.4 17.35 150.45 18 152 18V0.5H132.25C131.55 0.5 131.3 0.750001 131.3 1.05C131.3 1.35 131.35 1.75 132.3 1.9C139.5 2.9 145.8 8.3 147.8 13.35ZM127.75 29.15C127.75 30.5 128.8 30.5 129.65 30.45C136.1 29.95 141.15 26.3 141.15 19.25C141.15 12.2 136.2 8.55 129.65 8.05C128.85 8 127.75 8.1 127.75 9.35V29.15ZM147.8 25.15C145.8 30.2 139.5 35.6 132.3 36.6C131.35 36.75 131.3 37.15 131.3 37.45C131.3 37.75 131.55 38 132.25 38H152V20.5C150.45 20.5 149.4 21.15 147.8 25.15ZM114.5 38H117.5C118.9 38 120 36.9 120 35.5V23C120 21.6 118.9 20.5 117.5 20.5H114.5C113.85 20.5 113.4 22.4 113.4 29.25C113.4 36.1 113.85 38 114.5 38ZM165.15 13.55C165.15 14.95 166.25 16.05 167.65 16.05H179.3C181.25 16.05 180.9 18 183.5 18H189.5V0.5H188.5C185.75 0.5 188.95 6.45 184.9 6.45H167.65C166.25 6.45 165.15 7.55 165.15 8.95V13.55ZM152 18H155C156.4 18 157.5 16.85 157.5 15.4V3C157.5 1.6 156.4 0.5 155 0.5H152C151.35 0.5 150.9 2.4 150.9 9.25C150.9 16.1 151.35 18 152 18ZM152 38H155C156.4 38 157.5 36.9 157.5 35.5V23C157.5 21.6 156.4 20.5 155 20.5H152C151.35 20.5 150.9 22.4 150.9 29.25C150.9 36.1 151.35 38 152 38ZM165.15 24.95V29.5C165.15 30.9 166.25 32 167.65 32H184.9C188.95 32 185.75 38 188.5 38H189.5V20.5H183.5C180.9 20.5 181.25 22.35 179.3 22.35H167.65C166.25 22.35 165.15 23.5 165.15 24.95ZM205.7 34.05C205.9 35.75 206.8 37.05 208.2 37.05H208.35C209.75 37.05 210.65 35.75 210.85 34.05L214.75 3.5C214.95 1.8 213.65 0.5 212.25 0.5H204.25C202.85 0.5 201.55 1.8 201.75 3.5L205.7 34.05ZM225.6 0.5C224.2 0.5 223.3 1.55 223.1 3L221.2 15.4C221 16.8 222 18 223.45 18H227V0.5H225.6ZM189.5 18H193.25C194.7 18 195.7 16.8 195.5 15.4L193.6 3C193.4 1.55 192.5 0.5 191.1 0.5H189.5C188.85 0.5 188.4 2.4 188.4 9.25C188.4 16.1 188.85 18 189.5 18ZM189.5 38H196.1C198 38 198.8 36.95 198.6 35.5L196.65 22.85C196.4 21.35 195.4 20.5 193.9 20.5H189.5C188.85 20.5 188.4 22.4 188.4 29.25C188.4 36.1 188.85 38 189.5 38ZM222.8 20.5C221.3 20.5 220.3 21.35 220.05 22.85L218.1 35.5C217.9 36.95 218.7 38 220.6 38H227V20.5H222.8Z"
          fill={theme === "dark" ? "#FEFEFE" : "#0A0A0A"}
        />
      </svg>
    </ClientOnly>
  );
};

export default AppLogo;
