import ContentGrid from "../components/Contents/ContentGrid";
import { useParams } from "react-router-dom";
import Tabbar from "../components/Contents/Tabbar";


const Contents = () => {
  const params = useParams();

  const contentType = params.contentType;
  const teacherOrSubject = params.teacherOrSubject;
  console.log(contentType, teacherOrSubject);
  return (
    <>
      {contentType ? (
        <>
          <Tabbar />
          <ContentGrid />
        </>
      ) : (
        <Tabbar />
      )}
    </>
  );
};

export default Contents;

// teacherOrSubject={teacherOrSubject}
//  type={contentType} teacherOrSubject={teacherOrSubject}
