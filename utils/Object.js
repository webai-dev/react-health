export const cloneObject = (obj) => {
  if (!obj) {
    return null;
  }

  if (typeof obj === 'string') {
    return obj;
  }

  try {
    return JSON.parse(JSON.stringify(obj));
  } catch(e) {
    return null;
  }
}

export const emptifyObject = (obj) => {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj;
  }

  Object.keys(obj).map(key => obj[key] = obj[key] || undefined);

  return obj;
}