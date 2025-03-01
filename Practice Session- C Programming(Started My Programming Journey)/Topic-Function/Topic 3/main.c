#include<stdio.h>
double trangleArea(double a,double b);
int main()
{
    double base,height,area;
    printf("Enter the base: ");
    scanf("%lf",&base);
    printf("Enter height : ");
    scanf("%lf",&height);
    area=trangleArea(base,height);
    printf("The area is: %lf\n",area);
    getch();
}
double trangleArea(double a,double b)
{
    return 0.5*a*b;
}
