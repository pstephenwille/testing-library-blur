import React, {useEffect, useState} from "react";

export default (): JSX.Element => {
  enum fieldNames {
    customerEmail = 'customerEmail',
    confirmationEmail = 'confirmationEmail',
    password = 'password',
    caseNumber = 'caseNumber'
  }

  enum errorMessages {
    emailInput = 'A valid email address is required',
    textInput = 'Field can not be null'
  }

  const requiredFields = {
    [fieldNames.customerEmail]: true,
    [fieldNames.password]: true,
    [fieldNames.caseNumber]: true
  };
  const [formFields, setFormFields] = useState({
    [fieldNames.customerEmail]: '',
    [fieldNames.confirmationEmail]: '',
    [fieldNames.password]: '',
    [fieldNames.caseNumber]: ''
  });
  const [errorFields, setErrorFields] = useState({
    [fieldNames.customerEmail]: undefined,
    [fieldNames.confirmationEmail]: undefined,
    [fieldNames.password]: undefined,
    [fieldNames.caseNumber]: undefined
  });


  const emailPattern = new RegExp(/.+@.+/);


  const validateEmailInput = (field, evt: React.FormEvent<HTMLInputElement>): void => {
      console.log('blur ', evt);
    let emailIsValid = false;

    if (!requiredFields[field] && !evt.currentTarget.value.length) {
      emailIsValid = true;
    } else {
      emailIsValid = evt.currentTarget.value.length > 0 && emailPattern.test(evt.currentTarget.value);
    }
    setErrorFields({...errorFields, ...{[field]: !emailIsValid}});
  };


  return (
      <div id={'passwdReset'}>
              <article className="form">

                    {/* Customer Email */}
                  <section className={'form__fieldset'}>
                        <label htmlFor={fieldNames.customerEmail}>
                            Customer Email:
                            <span className={'required'}>*</span></label>
                        <input id={fieldNames.customerEmail}
                               type={'text'}
                               maxLength={200}
                               onChange={(evt) =>
                                   setFormFields({
                                       ...formFields,
                                       ...{[fieldNames.customerEmail]: evt.currentTarget.value}
                                   })}
                               onBlur={(evt) =>
                                   validateEmailInput(fieldNames.customerEmail, evt)}/>

                        <div className={'tool-tip'}>
                            <p className={'tool-tip__message'}>
                                The email address that uniquely identifies the customer</p>
                        </div>
                        <p className={`error ${errorFields.customerEmail ? 'show' : 'hide'}`}>
                            {errorMessages.emailInput} woot</p>
                    </section>


                </article>
        </div>
  );

};
