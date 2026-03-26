import { mockCategories, MockCourse } from "@/data/mockTestData";

export async function getCourseBySlug(slug: string): Promise<MockCourse | null> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    for (const category of mockCategories) {
        const course = category.courses.find((c) => c.slug === slug);
        if (course) return course;
    }
    return null;
}

export async function getRelatedCourses(categoryId: string, currentCourseId: string): Promise<MockCourse[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    const category = mockCategories.find(c => c.id === categoryId);
    if (!category) return [];

    return category.courses.filter(c => c.id !== currentCourseId);
}
