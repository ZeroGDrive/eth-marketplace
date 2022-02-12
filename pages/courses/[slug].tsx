import { Modal } from '@components/common';
import { CourseHero, Curriculum, KeyPoints } from '@components/course';
import { BaseLayout } from '@components/layout';
import { getAllCourses, ICourse } from '@content/fetcher';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  course: ICourse;
};

export default function Course({ course }: Props) {
  return (
    <BaseLayout>
      {course.title}
      <div className="py-4">
        <CourseHero />
      </div>
      <KeyPoints />
      <Curriculum />
      <Modal />
    </BaseLayout>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
  const { data } = getAllCourses();

  return {
    paths: data.map((course) => ({ params: { slug: course.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  { course: ICourse },
  { slug: string }
> = ({ params }) => {
  const { data } = getAllCourses();
  const course = data.find((course) => course.slug === params?.slug) as ICourse;
  return {
    props: {
      course,
    },
  };
};
