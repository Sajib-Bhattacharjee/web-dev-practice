#include<stdio.h>
#include<conio.h>
struct person
{
    int name[1000];
    int age;
    double salary;
};

int main()
{
    int n;
    printf("\n\n");
    printf("How many person you want to see: ");
    scanf("%d",&n);

    struct person person[n];


    int i;
    for(i=0; i<n; i++)
  {
      printf("\nEnter the information for person %d ",i+1);
      printf("Enter the full name: ");
       fflush(stdin);
      gets(person[i].name);

      printf("\nEnter the age: ");
      scanf("%d",&person[i].age);

      printf("Enter the salary : ");
      scanf("%lf",&person[i].salary);
  }
    for(i=0; i<n; i++)
    {
         printf("\n\nInformation for person %d",i+1);

         printf("\nThe name is : %s\n",person[i].name);
         printf("\nThe age is:%d\n",person[i].age);

         printf("\nThe salary : %lf\n",person[i].salary);
    }




    getch();
}
