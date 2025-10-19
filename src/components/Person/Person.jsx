export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let married = <p className="Person__partner">I am not married</p>;

  if (isMarried) {
    const partnerWord = sex === 'm' ? 'wife' : 'husband';

    married = (
      <p className="Person__partner">
        {partnerName} is my {partnerWord}
      </p>
    );
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        {married}
      </section>
    </div>
  );
};
