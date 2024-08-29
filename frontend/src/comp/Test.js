import React, {useEffect, useState} from "react";
import axios from "axios";

function BackEndTest() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/test/hello')
            .then((res) => {
                setHello(res.data);
            })
        // fetch('/api/test')
        //     .then((res) => {
        //         console.log(res);
        //         setHello(res.data);
        //     })
    }, []);
    return (
        <div>
            백엔드 데이터 : {hello}
        </div>
    );
}

export default BackEndTest;