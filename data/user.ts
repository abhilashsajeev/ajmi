import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    // todo : find first is used findUnique must be used
    console.log("Get user by email is called");
    const user = await db.user.findUnique({
      where: { email: email },
    });

    return user;
  } catch (e) {
    console.log("Error in get user by email", e);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

export const getAllNonAdminUsers = async () => {
  try {
    const userList = await db.user.findMany({
      where: {
        role: {
          not: "A",
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
        details: {
          select: {
            name: true,
            home_address: true,
            work_address: true,
            phone_number: true,
            date_of_birth: true,
            date_of_join: true,
            date_relieved: true,
            post_id: true,
            salary: true,
            country: true,
            salary_unit: true,
            crated_date: true,
            created_by: true,
          },
        },
      },
    });
    return userList;
  } catch {
    return null;
  }
};
