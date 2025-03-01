#include<stdio.h>
struct person
{
    char name[45];
    int age;
    int age;
    double salary;

};
void display (struct person p)
{
     printf("The name is: %s\n",p.name);
    printf("The age is : %d\n",p.age);
    printf("The salary is: %lf\n",p.salary);


}


int main()
{
    struct person person1,person2;

    strcpy(person1.name,"Sajib kuamr");
    person1.age=27;
    person1.salary=45.455;
    display(person1);

    strcpy(person2.name,"Pallobi Bhattacharjee");
        person2.age=33;
        person2.salary=454545.4454;
        display(person2);

    getch();
}
