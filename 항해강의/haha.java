import java.util.Arrays;

public class haha {
    public static void main(String[] args){
        int [] list = {10,20,30};
        int [] numbers = Arrays.copyOf(list, list.length) ; // 새로운 배열 만듬
        list[0]=100;
        for(int i=0;i<list.length;i++)
            System.out.print(numbers[i]+"\n");
    }
}
