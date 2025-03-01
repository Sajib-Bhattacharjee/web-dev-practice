#include<stdio.h>

struct person
{
    int age;
    double salary ;

};
  int main()
  {
      struct person person1,person2,person3;


      printf("Person1 Information ");
      printf("Enter the age: ");
      scanf("%d",&person1.age);
      printf("The age is: %d\n",person1.age);
     printf("Enter the salary: ");
     scanf("%lf",person1.salary);
     printf("The salary is: %lf\n",person1.salary);


        printf("Person2 Information ");
      printf("Enter the age: ");
      scanf("%d",&person2.age);
      printf("The age is: %d\n",person2.age);
     printf("Enter the salary: ");
     scanf("%lf",person2.salary);
     printf("The salary is : %lf\n",person2.salary);



     getch();

  }
