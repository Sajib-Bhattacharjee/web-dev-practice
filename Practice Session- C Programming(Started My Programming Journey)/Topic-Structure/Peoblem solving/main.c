#include<stdio.h>
/* Most important note: After using gets chatacter then use the important
 library function;*/
struct person
{
    char name[50];
    int n;
    int age;
    double salary;

};
int main()
{
    struct person person[1000];
    int i;
    int n;
    printf("How many person: ");
    scanf("%d ",&n);

    for(i=0; i<n; i++)
    {
        printf("Enter the information for person %d\n",i+1);
        printf("Enter the name: ");
        fflush(stdin);
        gets(person[i].name);
        printf("Enter the age: ");
        scanf("%d",&person[i].age);
        printf("Enter the salary: ");
        scanf("%lf",&person[i].salary);

    }



for(i=1; i<n; i++)
{
    printf("Information for person %d\n",i+1);
    printf("Name: %s\n",person[i].name);
    printf(" Age : %d\n",person[i].age);
    printf("Salary: %lf\n",person[i].salary);
}

getch();
}
