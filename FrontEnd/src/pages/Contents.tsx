import ContentGrid from "../components/Contents/ContentGrid.tsx";
import { useParams } from "react-router-dom";
import Tabbar from "../components/Contents/Tabbar.tsx";

const Contents = () => {
  const params = useParams();
  const contentType = params.contentType;
  const teacherOrSubject = params.teacherOrSubject;
  console.log(contentType, teacherOrSubject);
  return (
    <>
      {contentType ? (
        <>
          <Tabbar teacherOrSubject={teacherOrSubject} />
          <ContentGrid type={contentType} teacherOrSubject={teacherOrSubject} />
        </>
      ) : (
        <Tabbar teacherOrSubject={teacherOrSubject} />
      )}
    </>
  );
};

export default Contents;
