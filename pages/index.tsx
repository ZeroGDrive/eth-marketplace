import { Hero } from '@components/common';
import { CourseList } from '@components/course';
import { BaseLayout } from '@components/layout';
import { getAllCourses, ICourse } from '@content/fetcher';

type Props = {
  courses: ICourse[];
};
export default function Home({ courses }: Props) {
  return (
    <BaseLayout>
      <Hero />
      <CourseList courses={courses} />
    </BaseLayout>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}
