import React, { useRef } from "react";

function TenthForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileNumberInputRef = useRef();
  let telInputRef = useRef();
  let engInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();

  let resultParaRef = useRef();

  let lastNameSpanRef = useRef();
  let firstNameSpanRef = useRef();
  let emailSpanRef = useRef();
  let passwordSpanRef = useRef();
  let mobileNumberSpanRef = useRef();
  let telSpanRef = useRef();
  let hindiSpanRef = useRef();
  let engSpanRef = useRef();
  let mathsSpanRef = useRef();
  let sciSpanRef = useRef();
  let socSpanRef = useRef();

  let nameRegEx = /^[A-Z][a-zA-Z' -]{2,19}$/;
  let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,30}$/;
  let mobileNumberRegEx =/^[6-9]\d{9}$/;

  let inputOnFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "pink";
  };

  let inputOnBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "";
  };

  let inputOnChange = (inputRef, spanRef) => {
    if (inputRef.current.value < 0 || inputRef.current.value > 100) {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.backgroundColor = "deeppink";
    } else {
      spanRef.current.innerHTML =
        inputRef.current.value >= 35 ? "PASS" : "FAIL";
      spanRef.current.style.backgroundColor =
        inputRef.current.value >= 35 ? "Green" : "Red";
    }
  };

  let validateName = (inputRef, spanRef) => {
    let result = nameRegEx.test(inputRef.current.value);

    if (result == true) {
      spanRef.current.innerHTML = "Valid";
      spanRef.current.style.backgroundColor = "green";
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.backgroundColor = "red";
    }
  };

  let validateEmail = (inputRef, spanRef) => {
    let result = emailRegEx.test(inputRef.current.value);

    if (result == true) {
      spanRef.current.innerHTML = "Valid";
      spanRef.current.style.backgroundColor = "green";
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.backgroundColor = "red";
    }
  };

  let validatePassword = (inputRef, spanRef) => {
    let result = passwordRegEx.test(inputRef.current.value);

    if (result == true) {
      spanRef.current.innerHTML = "Valid";
      spanRef.current.style.backgroundColor = "green";
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.backgroundColor = "red";
    }
  };

  let validateMobileNumber = (inputRef, spanRef) => {
    let result = mobileNumberRegEx.test(inputRef.current.value);

    if (result == true) {
      spanRef.current.innerHTML = "Valid";
      spanRef.current.style.backgroundColor = "green";
    } else {
      spanRef.current.innerHTML = "Invalid";
      spanRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>firstName</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              inputOnFocus(firstNameInputRef);
            }}
            onBlur={() => {
              inputOnBlur(firstNameInputRef);
            }}
            onChange={() => {
              validateName(firstNameInputRef, firstNameSpanRef);
            }}
          ></input>
          <span ref={firstNameSpanRef}></span>
        </div>
        <div>
          <label>LastName</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              inputOnFocus(lastNameInputRef);
            }}
            onBlur={() => {
              inputOnBlur(lastNameInputRef);
            }}
            onChange={() => {
              validateName(lastNameInputRef, lastNameSpanRef);
            }}
          ></input>
          <span ref={lastNameSpanRef}></span>
        </div>
        <div>
          <label>Email</label>
          <input
            ref={emailInputRef}
            onFocus={() => {
              inputOnFocus(emailInputRef);
            }}
            onBlur={() => {
              inputOnBlur(emailInputRef);
            }}
            onChange={() => {
              validateEmail(emailInputRef, emailSpanRef);
            }}
          ></input>
          <span ref={emailSpanRef}></span>
        </div>
        <div>
          <label>Password</label>
          <input
            ref={passwordInputRef}
            onFocus={() => {
              inputOnFocus(passwordInputRef);
            }}
            onBlur={() => {
              inputOnBlur(passwordInputRef);
            }}
            onChange={() => {
              validatePassword(passwordInputRef, passwordSpanRef);
            }}
          ></input>
          <span ref={passwordSpanRef}></span>
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            ref={mobileNumberInputRef}
            onFocus={() => {
              inputOnFocus(mobileNumberInputRef);
            }}
            onBlur={() => {
              inputOnBlur(mobileNumberInputRef);
            }}
            onChange={() => {
              validateMobileNumber(mobileNumberInputRef, mobileNumberSpanRef);
            }}
          ></input>
          <span ref={mobileNumberSpanRef}></span>
        </div>
        <div>
          <label>Telugu</label>
          <input
            ref={telInputRef}
            onFocus={() => {
              inputOnFocus(telInputRef);
            }}
            onBlur={() => {
              inputOnBlur(telInputRef);
            }}
            onChange={() => {
              inputOnChange(telInputRef, telSpanRef);
            }}
          ></input>
          <span ref={telSpanRef}></span>
        </div>
        <div>
          <label>Hindi</label>
          <input
            ref={hindiInputRef}
            onFocus={() => {
              inputOnFocus(hindiInputRef);
            }}
            onBlur={() => {
              inputOnBlur(hindiInputRef);
            }}
            onChange={() => {
              inputOnChange(hindiInputRef, hindiSpanRef);
            }}
          ></input>
          <span ref={hindiSpanRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            ref={engInputRef}
            onFocus={() => {
              inputOnFocus(engInputRef);
            }}
            onBlur={() => {
              inputOnBlur(engInputRef);
            }}
            onChange={() => {
              inputOnChange(engInputRef, engSpanRef);
            }}
          ></input>
          <span ref={engSpanRef}></span>
        </div>
        <div>
          <label>Maths</label>
          <input
            ref={mathsInputRef}
            onFocus={() => {
              inputOnFocus(mathsInputRef);
            }}
            onBlur={() => {
              inputOnBlur(mathsInputRef);
            }}
            onChange={() => {
              inputOnChange(mathsInputRef, mathsSpanRef);
            }}
          ></input>
          <span ref={mathsSpanRef}></span>
        </div>
        <div>
          <label>Science</label>
          <input
            ref={sciInputRef}
            onFocus={() => {
              inputOnFocus(sciInputRef);
            }}
            onBlur={() => {
              inputOnBlur(sciInputRef);
            }}
            onChange={() => {
              inputOnChange(sciInputRef, sciSpanRef);
            }}
          ></input>
          <span ref={sciSpanRef}></span>
        </div>
        <div>
          <label>Social</label>
          <input
            ref={socInputRef}
            onFocus={() => {
              inputOnFocus(socInputRef);
            }}
            onBlur={() => {
              inputOnBlur(socInputRef);
            }}
            onChange={() => {
              inputOnChange(socInputRef, socSpanRef);
            }}
          ></input>
          <span ref={socSpanRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let telMarks = Number(telInputRef.current.value);
              let hindiMarks = Number(hindiInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let mathsMarks = Number(mathsInputRef.current.value);
              let sciMarks = Number(sciInputRef.current.value);
              let socMarks = Number(socInputRef.current.value);
              let totalMarks =
                telMarks +
                hindiMarks +
                engMarks +
                mathsMarks +
                sciMarks +
                socMarks;

              let perc = (totalMarks / 600) * 100;

              telSpanRef.current.innerHTML = telMarks >= 35 ? "PASS" : "FAIL";
              hindiSpanRef.current.innerHTML =
                hindiMarks >= 35 ? "PASS" : "FAIL";
              engSpanRef.current.innerHTML = engMarks >= 35 ? "PASS" : "FAIL";
              mathsSpanRef.current.innerHTML =
                mathsMarks >= 35 ? "PASS" : "FAIL";
              sciSpanRef.current.innerHTML = sciMarks >= 35 ? "PASS" : "FAIL";
              socSpanRef.current.innerHTML = socMarks >= 35 ? "PASS" : "FAIL";

              resultParaRef.current.innerHTML = `${firstName} ${lastName} got Total marks of ${totalMarks} with percentage of ${perc.toFixed(
                2
              )}%`;
            }}
          >
            Calculate Result
          </button>
        </div>
        <div>
          <p ref={resultParaRef}>please enter values</p>
        </div>
      </form>
    </div>
  );
}

export default TenthForm;
