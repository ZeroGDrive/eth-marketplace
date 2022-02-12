export type ICourse = {
  id: string;
  type: string;
  title: string;
  description: string;
  coverImage: string;
  author: string;
  link: string;
  slug: string;
  wsl: string[];
  createdAt: string;
  index?: number;
};
export type CourseMap = { [key: string]: ICourse };
export type CoursesResponse = {
  data: ICourse[];
  courseMap: CourseMap;
};

import courses from './index.json';

const courseMap = courses.reduce((acc, curr, index) => {
  acc[curr.id] = curr;
  acc[curr.id].index = index;
  return acc;
}, {} as CourseMap);

export const getAllCourses = (): CoursesResponse => ({
  data: courses,
  courseMap,
});
