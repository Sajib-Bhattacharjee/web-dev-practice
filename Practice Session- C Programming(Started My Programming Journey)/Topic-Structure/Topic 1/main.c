//I do not know that the program how many important but I am trying it hatdly.....

#include<stdio.h>

    struct person
    {
                int age ;
        double  salary;
        double marks;
    };

int main()
{
    struct person person1,person2;
    person1.age=39;
    person1.salary=3999.3;
    person1.marks=333.355;
    printf("\n\nFor Person1: ");
    printf("The age is : %d\n",person1.age);
    printf("The salary is : %lf\n",person1.salary);
        printf("The marks is: %lf\n",person1.marks);
        getch();

}
