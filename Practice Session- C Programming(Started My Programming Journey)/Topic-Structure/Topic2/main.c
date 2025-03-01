//Think about the what kind different of Global user difine variable and Local veriable;

#include<stdio.h>

struct person
{

    int age;
    double salary;


};
int main()
{
    struct person person1,person2;
    printf("Enter the information for person1:  ");
    printf("\nEnter the age: ");
    scanf("%d",&person1.age);
    printf("The age is: %d\n",person1.age);

    printf("The salary: ");
   scanf("%lf",&person1.salary);
   printf("The salary is: %lf\n",person1.salary);


   printf("\n\nEnter the information for person2 ");
     printf("Enter the age: ");
    scanf("%d",&person2.age);
    printf("The age is: %d\n",person1.age);

    printf("The salary: ");
   scanf("%lf",&person2.salary);
   printf("The salary is: %lf\n",person2.salary);


    getch();

}
