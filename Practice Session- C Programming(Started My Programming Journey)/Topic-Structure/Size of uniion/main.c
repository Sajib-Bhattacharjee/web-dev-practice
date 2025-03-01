#include<stdio.h>

union test1
{
    int x;
    float b;
    char name[34];

};
union test2
{
     char name[22];
     int x;
     double d;

};
    union test3
    {
       double d;
    int x;
    float f;
    };



    int main()
    {
        union test1 t1;
        union test2 t2;
        union test3 t3;
        printf("Then size is: %d\n",sizeof(t1));
        printf("The size is: %d\n",sizeof(t2));
        printf("The size is: %d\n",sizeof(t3));




    }

