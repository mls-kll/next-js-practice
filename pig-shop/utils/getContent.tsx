 export const getPigs = async () => {
  try {
    const result = await fetch(`http://localhost:8080/pigs`);
    return result.json();
  } catch (error) {
    console.log(error);
  }
}

export const getPig = async (id: string) => {
  try {
    const result = await fetch(`http://localhost:8080/pig/${id}`);
    return result.json();
  } catch (error) {
    console.log(error);
  }
}