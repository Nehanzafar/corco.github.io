import SearchBar from "../components/search";
import { HeroParagraph, mobileHeroParagraph } from "../constants";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <div
        role="Hero section"
        className="bg-heroImg bg-cover md:h-[100vh] h-[60vh] lg:block flex flex-col items-center justify-start"
      >
        <div className="flex flex-col lg:items-start items-center justify-center lg:w-1/2 w-auto h-full lg:ml-16">
          <h1 className="font-dancingScript lg:text-mainHeading md:text-[6rem] text-[3rem] text-backgroundColors-1 my-1">
            Search Recipes
          </h1>
          <SearchBar className={"shadow-standard my-1"} />
          <p className="hidden md:block bg-backgroundColors-1/80 text-[16px] text-secondary-1 shadow-standard my-3 p-2 rounded-[20px]  text-wrap lg:w-[45vw] w-[80vw] lg:text-left text-center">
            {HeroParagraph}
          </p>
          <p className="md:hidden block bg-backgroundColors-1/80 text-[16px] text-secondary-1 shadow-standard my-3 p-2 rounded-[20px]  text-wrap lg:w-[45vw] w-[80vw] lg:text-left text-center">
            {mobileHeroParagraph}
          </p>
          <div className="lg:block flex justify-around lg:w-auto w-full lg:px-0 md:px-12 px-8">
            <Button
              onclick={() => alert("Hello 1")}
              color={
                "bg-secondary-1 text-backgroundColors-2 hover:bg-secondary-2 hover:text-textColors-1"
              }
              className={
                "text-backgroundColors-2 md:py-3 md:my-2 py-2 md:px-8 px-4 mx-4 md:text-button md:rounded-2xl text-[1rem]"
              }
            >
              Explore
            </Button>
            <Button
              onclick={() => alert("Hello 2")}
              color={
                "bg-secondary-1 text-backgroundColors-2 hover:bg-secondary-2 lg:ml-6 hover:text-textColors-1"
              }
              className={
                "text-backgroundColors-2 md:py-3 md:my-2 py-2 md:px-8 px-4 mx-4 md:text-button md:rounded-2xl text-[1rem]"
              }
            >
              Random
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
