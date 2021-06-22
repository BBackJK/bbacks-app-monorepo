# Vo Dir

DTO와의 차이는 VO는 애플리케이션 `내부`의 요구사항

핵심 역할 : equals()와 hashcode()를 오버라이딩 하는 것.

```java
@Getter @Setter
@Alias("article")
class ArticleVO {
    private Long id;
    private String title;
    private String contents;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Article article = (Article) o;
        return Objects.equals(id, article.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
```