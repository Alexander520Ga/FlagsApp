export const deleteTildes = (text: string | undefined) => {
  const validatedText = text
    ?.normalize('NFD')
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
    .normalize();
  return validatedText;
};
