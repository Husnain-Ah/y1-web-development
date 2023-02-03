window.onload = () =>
  function validate() {
    const validate_name = (name) => {
      let isValid = true;

      if (name === null || name === "" || typeof name !== "string") {
        isValid = false;
        messages.push("name is required");
      }

      let re = /^[a-zA-Z\-]{1,32}$/;
      if (re.test(name) === false) {
        isValid = false;
      }

      return isValid;
    };
  };
