import React, {useEffect, useState} from "react";
import http from './http';
export default (): JSX.Element => {

    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        authorizeUser()
    }, []);

    const authorizeUser = () => {
        http.get('user')
            .then(resp => {
                setSignedIn(resp.data[0])
            })
            .catch(err => {
                setSignedIn(err.data[0])
            })
    };

    return (
        <div id={'App'}>
          <div>
              user has signed in: {signedIn.toString()}
          </div>
      </div>
    );

};
