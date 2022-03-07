import java.util.Arrays;
import java.util.Scanner;

public class haha {
    public static void main(String[] args){
    //     int[] list = {10,20,30};
    //     int[] numbers = Arrays.copyOf(list, list.length) ; // 새로운 배열 만듬
    //     list[0]=100;
    //     for(int i=0;i<list.length;i++)
    //         System.out.print(numbers[i]+"\n");
    // }
    Scanner scan = new Scanner(System.in);
    int [] scores = new int[10];
    int size=0;
    int sc;
    sc = scan.nextInt();
    while(sc>20){
        scores[size]=sc;
        size++;
        sc=scan.nextInt();
    }
    sort(scores,size);
}
private static void sort(int[] arr, int size){
    int max;
    for(int i=0;i<size-1;i++){
        max=i;
        for(int j=i+1;j<size; j++){
            if(arr[j]>arr[max]){
                max=j;
            }
        }
        swap(arr, i, max);
    }
;
}

private static void swap(int[] arr, int i, int j){
    int temp =arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

}
