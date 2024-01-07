export const initialState = {
  first_name: "",
  last_name: "",
  occupation: "",
  address: "",
  phone: "",
  email: "",
  additional: {
    nationality: "",
    birth_date: "",
  },
  experiences: [
    {
      title: "",
      company: "",
      location: "",
      start_date: "",
      end_date: "",
      description: "",
    },
  ],
  education: [
    {
      degree: "",
      institution: "",
      location: "",
      start_date: "",
      end_date: "",
    },
  ],
  skills: [],
  languages: [
    {
      title: "",
      level: "",
    },
  ],
  objective: "",
  projects: [],
  achievement: [],
  reference: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "setData": {
      return state.data;
    }
    default:
      return state;
  }
};
