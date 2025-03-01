#include<stdio.h>


struct person
{

    int age ;
    double     salary ;
};
int main()
{
    struct person person[4];
    int i;
    for(i=0; i<4; i++)
    {
    printf("Enter the information for person %d\n",i+1);

    printf("Enter the age: ");
    scanf("%d",&person[i].age);
    printf("Enter the salary:  ");
    scanf("%lf",&person[i].salary);

    }


    printf("\n\n");
   for(i=0; i<4; i++)
   {
       printf("Information for person %d\n",i+1);

       printf("Age: %d\n",person[i].age);
      printf("salary : %lf\n",person[i].salary);
   }
}
