export const fetchCafeDetail = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCafeInfo`
  );
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchHome = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getHomeInfo`
  );
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchMenu = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMenu`);
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchCategory = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategory`
  );
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
  );
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchBanner = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBanner`);
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchGallery = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getGallerys`
  );
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchVisitUs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getVisit`);
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchService = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getService`);
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchSocial = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`);
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};
