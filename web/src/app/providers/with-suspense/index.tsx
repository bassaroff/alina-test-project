import React, {Suspense} from "react";

export const withSuspense =(component: () => React.ReactNode): React.ReactNode => {
    return <>
        <Suspense fallback={"Loading..."}>
            {component()}
        </Suspense>
    </>
}