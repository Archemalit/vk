import React from "react"
import Preloader from "../components/common/preloader/preloader"


const FastConnectAppComponents = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<Preloader />}>
              <Component {...props} />
            </React.Suspense>
          );
    }
}

export default FastConnectAppComponents;