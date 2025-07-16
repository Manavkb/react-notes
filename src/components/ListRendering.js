function ListRendering() {
    const names = ['Alice', 'Bob', 'Charlie'];
    
    return (
      <div>
        {names.map((name, index) => (
          <h2 key={index}>{name}</h2>
        ))}
      </div>
    );
  }

  export default ListRendering;