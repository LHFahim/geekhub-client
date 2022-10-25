import React from 'react';

const FAQ = () => {
  return (
    <div className="w-3/4 mx-auto mt-10 space-y-5 ">
      <section className=" border border-indigo-600 p-5 rounded">
        <h1 className="text-2xl font-bold">
          Can I get a discount on GeekHub's courses?
        </h1>
        <p>
          Of course, we offer discounts to students who have brilliant academic
          records.
        </p>
      </section>
      <section className="border border-indigo-600 p-5 rounded">
        <h1 className="text-2xl font-bold">
          Can I get a job after completing GeekHub's courses?
        </h1>
        <p>
          We don't promise jobs. However, we do our best to prepare our students
          for intern level jobs!
        </p>
      </section>
      <section className="border border-indigo-600 p-5 rounded">
        <h1 className="text-2xl font-bold">
          How long can I access these courses?
        </h1>
        <p>
          Our courses will stay with you for so long as you need them. No
          worries!
        </p>
      </section>
      <section className="border border-indigo-600 p-5 rounded">
        <h1 className="text-2xl font-bold">How can I pay for the courses?</h1>
        <p>You can pay by debit, credit cards, and as well as Bkash!</p>
      </section>
    </div>
  );
};

export default FAQ;
