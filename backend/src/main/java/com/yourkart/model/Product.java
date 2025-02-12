import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String name;
    private String category;
    private String description;
    private double price;
    private String imageUrl;

    public Product() {}

    public Product(String name, String category, String description, double price, String imageUrl) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}