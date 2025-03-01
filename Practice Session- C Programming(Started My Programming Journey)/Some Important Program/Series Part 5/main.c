//The program is shows that the (1/n = ?) so the solution is ????/

#include<stdio.h>
int main()
{
    double n,sum=0,i;
    printf("Enter the last number : ");
    scanf("%lf",&n);

    for(i=1; i<=n; i++)
    {
        sum=sum+ (1/i);
        if(i==1)
        printf("\n1 +");
        else if(i==n)
            printf("(1/%lf)",i);
        else
            printf("(1/%lf) + ",i);
    }
    printf("The sum is: %lf",sum);
    getch();
}
