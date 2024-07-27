import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CollegeStudent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5.0 -10.0 110.0 135.0"
      {...props}
    >
      <Path d="M51.199 81.5v9.8c0 2 1.602 3.602 3.602 3.602s3.601-1.601 3.601-3.601V81.5h-7.3zM41.5 81.5v9.8c0 2 1.602 3.602 3.602 3.602s3.601-1.601 3.601-3.601V81.5h-7.3zM56 12l-5.602 2.2h-.3c0 .1-.301 0-.301 0l-4.301-1.7v3.2c.3.1.5.398.5.698 0 .301 0 .399-.3.602v4.398h-1.102V17c-.2-.102-.301-.398-.301-.602 0-.3.2-.601.5-.699v-3.398L43.894 12c-.8 1.102-1.199 2.5-1.199 4s.399 2.5 1 3.602V22.3h2.801c1 .5 2.2.898 3.398.898 4 0 7.2-3.199 7.2-7.199s-.399-2.8-1.2-3.898zM32.398 58.301c-.102 1.5-.2 2.398-.2 2.5 0 1.5 1.102 2.8 2.602 2.898 1.399 0 2.7-1.101 2.801-2.601 0 0 0-.801.102-2.102l-5.399-.699zM67.602 58.301l-5.398.7c.101 1.3.101 2.1.101 2.1 0 1.4 1.301 2.602 2.801 2.602 1.398 0 2.602-1.3 2.602-2.898 0-1.602 0-1-.2-2.5zM50 32.5l3.8-7.3c-1.3-.2-2.6-.302-3.8-.302-1.3 0-2.5.102-3.8.301z" />
      <Path d="M67.898 57.301c-.2-1.898-.602-4.2-1.102-7.2-.898-5.3-2.699-13-5.601-20.397-.7-1.7-2-3-3.7-3.5-.898-.301-1.8-.5-2.699-.7l-4.699 8.899-4.699-8.898c-.898.199-1.898.398-2.7.699-1.698.601-3 1.8-3.698 3.5-3 7.398-4.801 15.199-5.602 20.398-.5 3.101-.898 5.398-1.102 7.199l7 .898c.7-8.5 1.399-13.898 2.102-18l-1.5 40.5h20.699l-1.5-40.5c.7 4.102 1.398 9.5 2.102 18l7-.898zM50.102 5L39.204 9.2l5.7 2.198v-.601l4.1-1.5v-.102c0-.3.5-.5 1.102-.5.602 0 1.102.2 1.102.5 0 .301-.5.5-1.102.5h-.5l-4.101 1.5v.399l4.601 1.8 10.898-4.199-10.898-4.199z" />
    </Svg>
  );
}

export default CollegeStudent;