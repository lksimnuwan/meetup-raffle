import React from 'react';
import { Form, Field } from 'formik';
import { CountStepper } from '.';

export default () => (
  <Form>
    <div>
      <label className="db f4 f3-ns lh-copy dark-blue pb3" htmlFor="meetup">
        Meetup name (from your URL):
      </label>
      <Field
        className="input-reset f4 f3-ns ba bw3 b--moon-gray pa2 w-100"
        type="text"
        id="meetup"
        name="meetup"
        onFocus={e => e.target.select()}
        placeholder="required"
        required
      />
    </div>
    <div className="pb3 pb4-ns mv3 mv4-ns">
      <label
        className="db di-ns f4 f3-ns lh-copy dark-blue pv3 pv1-ns"
        htmlFor="count"
      >
        Number of winners:
      </label>
      <Field
        name="count"
        render={formikProps => (
          <CountStepper inputId="count" {...formikProps} />
        )}
      />
    </div>
    <button
      className="db center-ns w-100 w5-ns f5 f4-ns b input-reset ba near-black b--near-black bg-transparent hover-bg-moon-gray pointer ph5 pv3 shadow-5"
      type="submit"
    >
      Draw
    </button>
  </Form>
);
