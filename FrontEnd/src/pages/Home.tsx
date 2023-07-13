import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import SubjectCards from "../components/Home/SubjectCards";
import QuestionForm from "../components/Home/QuestionForm";
import TrendingArts from "../components/Home/TrendingArts";

const Home = () => {
  return (
    <>
      <Banner />
      <SubjectCards />
      <TrendingArts />
      <QuestionForm />
      <Features />
    </>
  );
};

export default Home;
