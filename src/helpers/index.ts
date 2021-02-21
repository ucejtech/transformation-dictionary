import { TransformTable } from '../interfaces/index';

export async function jsonReader(file: File) {
  return new Promise<TransformTable[]>((resolve) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const result = JSON.parse(
        typeof reader.result === 'string' ? reader.result : ''
      );
      resolve(result);
    };
  });
}
