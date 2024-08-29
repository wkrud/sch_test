import React, {useState, useRef} from "react";

async function post(path, body, headers = {}) {
    const url = `http://localhost:11434${path}`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body),
    };
    const response = await fetch(url, options);
    console.log(url);
    console.log(response);
    const data = await response.json();
    if (response.ok) {
        return data;
    } else {
        throw Error(data);
    }
}

function LlamaBox() {
    const [inputs, setInputs] = useState({
        question: '',
        answer: ''
    });
    const qInput = useRef();
    const {question, answer} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
           ...inputs,
            [name]: value
        });
    }

    const answerChange = (ans) => {
        var ansBox = document.getElementsByName("answer")[0];
        const {name} = ansBox;
        setInputs({
            ...inputs,
            [name]: ans
        });
    }

    const sendInfo = () => {
        var info = {
            "model": "llama3.1",
            "prompt": question,
            // "system": "가수",
            "stream": false
        };

        post("/api/generate", info)
            .then((data) => {
                // console.log(data);
                // console.log(data.response);
                var ans = data.response;
                answerChange(ans);
            })
            .catch((error) => console.log(error));
    };
    return (
        <div>
            <div>
                <input
                    name="question"
                    value={question}
                    ref={qInput}
                    onChange={onChange}
                />
                <button onClick={sendInfo}>입력</button>
            </div>
            <div>
                <textarea
                    name="answer"
                    value={answer}
                    // defaultValue="..."
                    readOnly={true}
                    onChange={answerChange}
                ></textarea>
            </div>
        </div>
    );
}

export default LlamaBox;