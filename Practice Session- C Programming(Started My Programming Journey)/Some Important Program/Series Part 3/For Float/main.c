#include<stdio.h>
int main()
{
    double num,i,sum=0;
    printf("Enter the last integer number:   ");
    scanf("%lf",&num);
    for(i=1.5; i<=num; i++)
    {
        printf("%lf\n",i);
        sum=sum+i;
    }
printf("The sum is: %lf",sum);

    getch();
}
